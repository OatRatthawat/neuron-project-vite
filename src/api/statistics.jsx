import { http } from "../utils/http";
import { NodeCatogery } from "../constants/nodeCategory";

/**
 *  Get Statistic (general | south node | north node)
 *  @param {String} type: 'driver'(south node) | 'app'(north node) | 'global'(general)
 *  @param {Object} params: Optional, if you want to get the data statistics of a node, pass in the parameter node name
 *  @returns {Promise} AxiosResponse
 */

export const getStatisticByType = async ( type = NodeCatogery.South, params = {} ) => {
    return http.get(`/metrics?category=${type}`, {params})
}