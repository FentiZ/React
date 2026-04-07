type Props = {
  search: string;
  setSearch: (v: string) => void;
  setSelectedUser: (v: string | null) => void;
  setPage: (v: number) => void;
  dark: boolean;
  setDark: (v: boolean) => void;
};

export default function Navbar({
  search,
  setSearch,
  setSelectedUser,
  setPage,
  dark,
  setDark,
}: Props) {
  return (
    <header className="navbar">
      <div
        className="logo"
        onClick={() => {
          setSelectedUser(null);
          setPage(1);
        }}
      >
        PixClone
      </div>

      <input
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
      </button>
    </header>
  );
}