
import { useTranslation } from 'next-i18next'


export default function PrivacyPolicy() {
    const { t } = useTranslation('common')

    return(
        <div className="company-text p-4">
        <h3>{t("privacyPolicy")}</h3>
        <p>{t("weValueYourPrivacy")}</p>
        <p>{t("ifYouHaveAdditionalQuestions")}</p>
        <h4>{t("GDPR")}</h4>
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
        <h4>{t("logFilesH4")}</h4>
        <p>{t("logFilesP")}</p>
        <h4>{t("cookiesH4")}</h4>
        <p>{t("cookiesP")}</p>

        <h4>{t("CCPAcollectionNoticeH2")}</h4>
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
        
        <h4>{t("CCPArightsNoticeH2")}</h4>
        <p>{t("CCPArightsP")}</p>
        <ul>
            <li>{t("CCPAright1")}</li>
            <li>{t("CCPAright2")}</li>
            <li>{t("CCPAright3")}</li>
            <li>{t("CCPAright4")}</li>
        </ul>
        
        <h4>{t("CCPAsaleNoticeH2")}</h4>
        <p>{t("CCPAsaleNoticeP")}</p>
        
        <h4>{t("CCPAfinancialIncentivesH2")}</h4>
        <p>{t("CCPAfinancialIncentivesP")}</p>
        
        <h4>{t("CCPAauthorizedAgentH2")}</h4>
        <p>{t("CCPAauthorizedAgentP")}</p>
        
        <h4>{t("privacyPoliciesH4")}</h4>
        <p>{t("privacyPoliciesP")}</p>
        <p>{t("thirdPartyAdServersP")}</p>
        <p>{t("noteThatSentinelHasNoAccessP")}</p>
        <h4>{t("thirdPartyPrivacyPoliciesH4")}</h4>
        <p>{t("ourPrivacyPolicyDoesNotApplyToOtherWebsites")}</p>
        <p>{t("youMayDisableCookies")}</p>
        <h4>{t("childrensInfoH4")}</h4>
        <p>{t("weValueChildrensPrivacy")}</p>
        <p>{t("weDontCollectChildrensData")}</p>
        <h4>{t("onlinePrivacyPolicyH4")}</h4>
        <p>{t("ourPolicyIsOnlyOnline")}</p>
        <h4>{t("GDPRconsentH4")}</h4>
        <p>{t("GDPRconsentP")}</p>
        </div>
    )
}