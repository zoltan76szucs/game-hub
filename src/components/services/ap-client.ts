import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "08ddd0278d4c4404b29408f26878d3ab",
  },
});
