import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#242424] flex flex-col items-center justify-center min-h-screen text-center text-white">
      <h1 className="font-bold text-6xl">404</h1>
      <p className="mt-4 text-xl">{t("notFound.pageNotFound")}</p>

      <Link
        to="/"
        className="active:bg-[#242424] active:text-white bg-white border-2 border-white font-semibold hover:bg-[#242424] hover:text-white mt-6 px-6 py-4 rounded-lg text-black text-lg transition"
      >
        {t("notFound.backHome")}
      </Link>
    </div>
  );
}

export default NotFound;
