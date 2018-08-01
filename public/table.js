    var temp;
    var tempthis;
        $(document).on('click', '.divTableMaster', function (event) {
            console.log(temp);
            var detail = this.nextElementSibling;
                if (detail.className != "divTableDetail noVisibleDetail") {
                    detail.className = "divTableDetail noVisibleDetail";
                    this.className = "divTableMaster noHaveDetail"
                }
                else {
                    if (temp != detail && temp != null) {
                        console.log("deneme")
                        temp.className = "divTableDetail noVisibleDetail";
                        tempthis.className = "divTableMaster noHaveDetail";
                    }
                    detail.className = "divTableDetail visibleDetail"
                    this.className = "divTableMaster haveDetail";
                    temp = detail;
                    tempthis = this;
                }
            
        });




