import { useTranslation } from "react-i18next";
import { supportedLngs } from "../../i18n/config.ts"
import TestFile from "./TestFile.jsx";
import i18next from "i18next"; 


function DashboardLayout() {
  
    const { t } = useTranslation(); 
    return (
        <div>

            <h2>{t("hello_world")}</h2> 
            <p>{t("simple_number", { value: 0.333333 })}</p>
            <p>{t("percent", { value: 0.333333 })}</p>
            <p>{t("custom_number", { value: 0.333333 })}</p>

            <p>{t("trees_grown_other", { count: 3 })}</p> 
            <p>{i18next.t('intlNumber', { val: 1000 })}</p>
            <p>{i18next.t('intlNumber', { val: 1000.1, lng: 'de' })}</p>
            <TestFile />

        </div>

    )
}

export default DashboardLayout
