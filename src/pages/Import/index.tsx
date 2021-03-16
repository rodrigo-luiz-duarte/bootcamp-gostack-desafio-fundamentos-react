import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    const data = new FormData();

    if (uploadedFiles) {
      uploadedFiles.map(file => {
        data.append('file', file.file, file.name);
        console.log('Adicionando o arquivo: ', file.name);
      });
    }

    console.log('FormData: ', data);

    try {
      await api.post('/transactions/import', data);
    } catch (err) {
      console.log(err.response.error);
    }
  }

  function submitFile(files: File[]): void {
    console.log('Arquivos: ', files);

    const fileProps: FileProps[] = [];

    const newUploadFiles: FileProps[] = [...uploadedFiles];

    files.map(file => {
      const fileProp: FileProps = {
        file,
        name: file.name,
        readableSize: '' + file.size,
      };

      newUploadFiles.push(fileProp);
    });

    setUploadedFiles(newUploadFiles);
  }

  return (
    <>
      <Header size="small" menuItemSelected="import" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
