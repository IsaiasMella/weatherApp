import axios from "axios";

export const api = async (options) => await axios.request(options).then((res) => res.data);
