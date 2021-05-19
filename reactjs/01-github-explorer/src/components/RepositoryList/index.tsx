import React from 'react';
import { RepositoryItem } from './RepositoryItem';
import api from '../../services/api';

import './styles.scss';

type RepoDataResponse = {
  id: number;
  name: string;
  html_url: string;
  description?: string;
};

type RepoModel = {
  link: string;
} & Omit<RepoDataResponse, 'html_url'>;

const RepositoryList = () => {
  const [repositories, setRepositories] = React.useState<RepoModel[]>([]);

  React.useEffect(() => {
    api.get('/users/vitorrios1001/repos').then((res) => {
      const newList = res.data.map(
        ({ id, name, html_url, description }: RepoDataResponse) => ({
          id,
          name,
          link: html_url,
          description,
        }),
      );

      setRepositories(newList);
    });
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((item) => (
          <RepositoryItem key={item.id} repository={item} />
        ))}
      </ul>
    </section>
  );
};

export { RepositoryList };
