import { Component } from '@angular/core';
import {NetworkService} from '../../services/network.service';

@Component({
    moduleId: module.id,
    selector: 'network',
    templateUrl: 'network.component.html'
})
export class NetworkComponent{
    networks = [];
    //facts = []


    constructor(private networkService:NetworkService) {
        this.networkService.getNetworkTasks()
            .subscribe(netTasks => {
                //console.log(netTasks);
                this.networks = netTasks;
            });
        this.networkService.getNetworkTasks()
            .subscribe(add_tab => {
                let facts_infos = Object.values(add_tab);
                for(let fact_info of facts_infos){
                    //console.log(fact_info)
                    let fact_categories = fact_info;
                    for(let fact_category of Object.values(fact_categories)){
                        //console.log(fact_category)
                        let categories_info = fact_category
                        for (let category_info of Object.values(categories_info)){
                            console.log(category_info.address_class)
                            console.log(category_info.certificate)
                            console.log(category_info.client_ssl_profile)
                            console.log(category_info.device)
                            //this.dev = category_info.device
                            //this.dv = Object.values(category_info.device);
                            //console.log(this.dv);
                            console.log(category_info.device_group)
                            console.log(category_info.interface)
                            console.log(category_info.key)
                            //console.log(category_info.node)
                            //console.log(category_info.pool)
                            //console.log(category_info.virtual_address)
                            //console.log(category_info.virtual_server)
                            //console.log(category_info.vlan)

                        }
                    }
                }
            });


    }

}