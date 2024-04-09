import { useTranslation } from "react-i18next";
import { supportedLngs } from "../../i18n/config.ts"

function TestFile() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    return (
        <div> 
            <div className="...">
                <div className="...">
                    <select
                        value={i18n.resolvedLanguage}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                    >
                        {Object.entries(supportedLngs).map(([code, name]) => (
                            <option value={code} key={code}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


        </div>
    )
}

export default TestFile
