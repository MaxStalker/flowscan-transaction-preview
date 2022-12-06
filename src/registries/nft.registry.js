import {getNFTData} from "../services/find.service.js";

class NftRegistry{
	data = {}

	ensureAccess(contract){
		if(!this.data[contract]){
			this.data[contract] = {}
		}
	}

	async fetchNFT(props){
		return getNFTData(props)
	}

	async getNFT(props){
		const {contract, owner, id} = props;

		// Make sure we can read from that "branch"
		this.ensureAccess(contract);

		if(!this.data[contract][id]){
			return this.fetchNFT(props)
		} else{
			return this.data[contract][id]
		}
	}
}

export default new NftRegistry()