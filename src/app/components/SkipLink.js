const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-4 focus:left-4 bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Aller au contenu principal
    </a>
  );
};

export default SkipLink;
