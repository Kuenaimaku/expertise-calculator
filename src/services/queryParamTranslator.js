import ExpertiseDefaults from "@/data/expertise.json"
import OptionDefaults from "@/data/options.json"
export default {
    toQueryParams(expertiseList, optionsList){
        var urlParams = new URLSearchParams();
        Object.keys(expertiseList).forEach(function(v) {
            let slim = Number.parseInt(expertiseList[v].value / 100);
            if (slim !== 0) urlParams.append(expertiseList[v].queryParam, slim)
        })
        Object.keys(optionsList).forEach(function(v) {
            if (v === "level"){
                let slim = Number.parseInt(optionsList[v].value);
                if (slim !== 1) urlParams.append(optionsList[v].queryParam, slim)
            } else {
                let slim = Number.parseInt(optionsList[v].value / 1000);
                if (slim !== 0) urlParams.append(optionsList[v].queryParam, slim)
            }
        })
        return urlParams.toString();
    },
    fromQueryParams(url){
        console.log(url);
        Object.keys(ExpertiseDefaults).forEach(function(item) {
            let queryValue = url.get(ExpertiseDefaults[item].queryParam)
            if (queryValue !== null){
                let hydrated = Number.parseInt(queryValue) * 100
                ExpertiseDefaults[item].value = hydrated;
            }
        })

        Object.keys(OptionDefaults).forEach(function(item) {
            let queryValue = url.get(OptionDefaults[item].queryParam)
            if (queryValue !== null){
                if (OptionDefaults[item].name === "Level"){
                    let hydrated = Number.parseInt(queryValue)
                    OptionDefaults[item].value = hydrated;
                } else {
                    let hydrated = Number.parseInt(queryValue) * 1000
                    OptionDefaults[item].value = hydrated;
                }
            }
        })
        
        var response = {
            expertise: ExpertiseDefaults,
            options: OptionDefaults
        }
        return response
    },
}