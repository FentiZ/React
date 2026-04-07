type Props = {
  sort: string;
  setSort: (s: any) => void;
};

export default function Sidebar({ setSort }: Props) {
  return (
    <div className="sidebar">
      <h3>Sort</h3>

      <p>Likes</p>
      <button onClick={() => setSort("likes_desc")}>↓ Desc</button>
      <button onClick={() => setSort("likes_asc")}>↑ Asc</button>

      <p>Views</p>
      <button onClick={() => setSort("views_desc")}>↓ Desc</button>
      <button onClick={() => setSort("views_asc")}>↑ Asc</button>
    </div>
  );
}