import { useTranslation } from "react-i18next";
import PreRegisterForm from "../PreRegisterForm";
import { useState } from "react";

const SubsidizedOverview = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            {t("Subsidized.overview.title")}
          </h2>
          <p className="text-gray-700 mb-6">
            {t("Subsidized.overview.description")}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              <i className="fa-solid fa-paper-plane mr-2"></i>
              {t("Subsidized.overview.button")}
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <PreRegisterForm
          courseId="67fb8bc722a71bd3d19d580d"
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
};

export default SubsidizedOverview;
