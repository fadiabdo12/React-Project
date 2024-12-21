export const CharacterRow = ({
  id,
  name,
  role,
  deathBlow,
  onEdit,
  onDelete,
}) => {
  return (
    <div>
      <span>Name: {name} </span>
      <span>Role: {role} </span>
      <span>Death blow: {deathBlow} </span>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
