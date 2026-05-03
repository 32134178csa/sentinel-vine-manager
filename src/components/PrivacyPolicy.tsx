
import { useTranslation } from 'next-i18next'


export default function PrivacyPolicy() {
    const { t } = useTranslation('common')

    return(
        <div className="privacy-policy">
        <h1 className="privacy-title">{t("privacyPolicy")}</h1>
        <p>{t("weValueYourPrivacy")}</p>
        <p>{t("ifYouHaveAdditionalQuestions")}</p>
        <h2>{t("GDPR")}</h2>
        <p>{t("weAreDataController")}</p>
        <p>{t("GDPRLegalBasis")}</p>
        <ul>
            <li>{t("legalBasis1")}</li>
            <li>{t("legalBasis2")}</li>
            <li>{t("legalBasis3")}</li>
            <li>{t("legalBasis4")}</li>
        </ul>
        <p>{t("willRetainYourPI")}</p>
        <p>{t("ifYoureEUCitizen")}</p>
        <p>{t("youHaveRights")}</p>
        <ul>
            <li>{t("rightToAccess")}</li>
            <li>{t("rightToRectification")}</li> 
            <li>{t("rightToObject")}</li>
            <li>{t("rightToRestrict")}</li>
            <li>{t("rightToDataPortability")}</li>
            <li>{t("rightToWithdrawConsent")}</li>
        </ul>
        <h2>{t("logFilesH4")}</h2>
        <p>{t("logFilesP")}</p>
        <h2>{t("cookiesH4")}</h2>
        <p>{t("cookiesP")}</p>

        <h2>{t("CCPAcollectionNoticeH2")}</h2>
        <p>{t("CCPAweCollectTheFollowing")}</p>
        <ul>
            <li>{t("CCPAcollection1")}</li>
            <li>{t("CCPAcollection2")}</li>
            <li>{t("CCPAcollection3")}</li>
            <li>{t("CCPAcollection4")}</li>
        </ul>
        <p>{t("CCPAmobileCollectionP")}</p>
        <ul>
            <li>{t("CCPAmobileCollection1")}</li>
            <li>{t("CCPAmobileCollection2")}</li>
            <li>{t("CCPAmobileCollection3")}</li>
            <li>{t("CCPAmobileCollection4")}</li>
        </ul>
        
        <h2>{t("CCPArightsNoticeH2")}</h2>
        <p>{t("CCPArightsP")}</p>
        <ul>
            <li>{t("CCPAright1")}</li>
            <li>{t("CCPAright2")}</li>
            <li>{t("CCPAright3")}</li>
            <li>{t("CCPAright4")}</li>
        </ul>
        
        <h2>{t("CCPAsaleNoticeH2")}</h2>
        <p>{t("CCPAsaleNoticeP")}</p>
        
        <h2>{t("CCPAfinancialIncentivesH2")}</h2>
        <p>{t("CCPAfinancialIncentivesP")}</p>
        
        <h2>{t("CCPAauthorizedAgentH2")}</h2>
        <p>{t("CCPAauthorizedAgentP")}</p>
        
        <h2>{t("privacyPoliciesH4")}</h2>
        <p>{t("privacyPoliciesP")}</p>
        <p>{t("thirdPartyAdServersP")}</p>
        <p>{t("noteThatSentinelHasNoAccessP")}</p>
        <h2>{t("thirdPartyPrivacyPoliciesH4")}</h2>
        <p>{t("ourPrivacyPolicyDoesNotApplyToOtherWebsites")}</p>
        <p>{t("youMayDisableCookies")}</p>
        <h2>{t("childrensInfoH4")}</h2>
        <p>{t("weValueChildrensPrivacy")}</p>
        <p>{t("weDontCollectChildrensData")}</p>
        <h2>{t("onlinePrivacyPolicyH4")}</h2>
        <p>{t("ourPolicyIsOnlyOnline")}</p>
        <h2>{t("GDPRconsentH4")}</h2>
        <p>{t("GDPRconsentP")}</p>
        </div>
    )
}