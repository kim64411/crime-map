/**
 * wms의 reprojection을 위해서 수정
 */

OpenLayers.Layer.WMSext = OpenLayers.Class(OpenLayers.Layer.WMS, {

    /**
     * Constructor
     */
    initialize: function(name, url, params, options) {   
        var newArguments = [];
        newArguments.push(name, url, params, options);        
        OpenLayers.Layer.WMS.prototype.initialize.apply(this, newArguments);        
    },

    /** 
     * APIMethod: getFullRequestString
     * Combine the layer's url with its params and these newParams. 
     *   
     *     Add the SRS parameter from projection -- this is probably
     *     more eloquently done via a setProjection() method, but this 
     *     works for now and always.
     *
     * Parameters:
     * newParams - {Object}
     * altUrl - {String} Use this as the url instead of the layer's url
     * 
     * Returns:
     * {String} 
     */
    getFullRequestString:function(newParams, altUrl) {
        
        var mapProjection = this.map.getProjectionObject();
        /* var projectionCode = this.projection && this.projection.equals(mapProjection) ?
            this.projection.getCode() :
            mapProjection.getCode(); */
        /*
         params.srs 에서 지정된 projection이 적용되려면 아래 코드로 변경
         위의 코드에서는 getCode를 호출시 undefined가 리턴되어서 적용되지않음
        */    
        var projectionCode = this.projection && this.projection.equals(mapProjection) ?
        this.projection.projCode :
        mapProjection.projCode;  

        var value = (projectionCode == "none") ? null : projectionCode;
        if (parseFloat(this.params.VERSION) >= 1.3) {
            this.params.CRS = value;
        } else {
            this.params.SRS = value;
        }
        //console.log(this.CLASS_NAME, mapProjection, this.projection, this.projection.equals(mapProjection), this.projection.getCode(), mapProjection.getCode());
        //console.log(this.CLASS_NAME, mapProjection, this.projection,this.projection.equals(mapProjection));
        if (typeof this.params.TRANSPARENT == "boolean") {
            newParams.TRANSPARENT = this.params.TRANSPARENT ? "TRUE" : "FALSE";
        }

        return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(this, arguments);
    },

    CLASS_NAME: "OpenLayers.Layer.WMSext"
});