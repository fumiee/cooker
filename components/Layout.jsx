export const Layout = (props) => {
  return (
    <div className="min-h-screen max-w-3xl  m-auto font-serif text-gray-600 ">
      {props.children}
    </div>
  );
};
