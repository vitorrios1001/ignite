type RepositoryItemProps = {
  repository: {
    link: string;
    name: string;
    description?: string;
  };
};

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  const { link, name, description } = repository;

  return (
    <li>
      <strong>{name ?? 'Default'}</strong>
      <p>{description}</p>
      <a target="_blank" href={link}>
        Acessar Repositorio
      </a>
    </li>
  );
};

export { RepositoryItem };
