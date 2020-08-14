// 	@param {Object} json
// 	@param {Object} type： 默认不传 ==>全部小写;传1 ==>全部大写;传2 ==>首字母大写
// 	将json的key值进行大小写转换
 
  function jsonKeysToCase(json,type){
		if(typeof json == 'object'){
			var tempJson = JSON.parse(JSON.stringify(json));
			toCase(tempJson);
			return tempJson;
		}else{
			return json;
		}
		
		function toCase(json){
			if(typeof json == 'object'){
				if(Array.isArray(json)){
					json.forEach(function(item){
						toCase(item);
					})
				}else{
					for (var key in json){
						var item = json[key];
						if(typeof item == 'object'){
							toCase(item);
						}
						delete(json[key]);
						switch (type){
							case 1:
								//key值全部大写
								json[key.toLocaleUpperCase()] = item;  
								break;
							case 2:
								//key值首字母大写，其余小写
								json[key.substring(0,1).toLocaleUpperCase() + key.substring(1).toLocaleLowerCase()] = item;  
								break;
							default:
								//默认key值全部小写
								json[key.toLocaleLowerCase()] = item;  
								break;
						}
					}
				}
			}
		}
	}