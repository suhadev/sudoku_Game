let dataAlreadyPresentCounter = 0
        //setInterval(lookForChange, 100)
        let valueEntered
        let dataValuePresent = false

        function checkInSquareGroup(groupName) {
            dataValuePresent = false
            let tagsNode = document.querySelectorAll("input[data-group =" + groupName + "]")
            console.log(tagsNode)
            dataAlreadyPresentCounter = 0
            tagsNode.forEach((element) => {
                console.log(element.value)
                if (element.value == valueEntered) {
                    console.log("matched")
                    dataAlreadyPresentCounter++
                    console.log("dataAlreadyPresentCounter")
                    if (dataAlreadyPresentCounter > 1) {
                        console.log("dataAlreadyPresentCounter")
                        alert("data already present in group")
                        dataValuePresent = true
                        element.value = ""
                    }

                }
            })
            console.log(dataValuePresent)
        }
        //     }


        // }
        function checkInRowGroup(groupName) {
            dataValuePresent = false
            let tagsNode = document.querySelectorAll("input[data-rowGroup=" + groupName + "]")
            console.log(tagsNode)
            dataAlreadyPresentCounter = 0
                    tagsNode.forEach((element) => {
                         console.log(element.value)
                            console.log(valueEntered)
                        if (element.value == valueEntered) {
                            //console.log("matched")
                            dataAlreadyPresentCounter++
                            //console.log(dataAlreadyPresentCounter)
                            if (dataAlreadyPresentCounter > 1) {
                                alert("data already present in row")
                               // tagsNode[i].value = ""
                               dataValuePresent = true
                               element.value = ""
                            }

                        }
                    })
                }
        //     }


        // }

        function checkInColumnGroup(groupName) {
            dataValuePresent = false

            let tagsNode = document.querySelectorAll("input[data-colGroup = " + groupName + "]")
            //console.log(tagsNode.length)
            // for (let i = 0; i < tagsNode.length; i++) {
            //     //console.log(tagsNode[i])
            //     //alert(i)
            //     tagsNode[i].oninput = () => {
            //         let valueEntered = tagsNode[i].value
            //         //console.log(valueEntered)
                   dataAlreadyPresentCounter = 0
                    tagsNode.forEach((element) => {
                        // console.log(element.value)

                        if (element.value == valueEntered) {
                            //console.log("matched")
                            dataAlreadyPresentCounter++
                            //console.log(dataAlreadyPresentCounter)
                            if (dataAlreadyPresentCounter > 1) {
                                alert("data already present in column")
                                //tagsNode[i].value = ""
                                dataValuePresent = true;
                                element.value = ""
                            }

                        }
                    })
                    
                }
        //     }


        // }


        $(document).ready(function () {

            $("input").change(function () {
                // alert( "Handler for .change() called." );
                valueEntered = this.value;
                let squareGroupName = this.attributes[1].value
                let rowGroupName = this.attributes[2].value
                let colGroupName = this.attributes[3].value
                //console.log($("input").attr("data-group","data-rowGroup"))
                console.log(this.value);
                //lookForChange()
                checkInSquareGroup(squareGroupName)
                if(dataValuePresent === false) {
                    checkInRowGroup(rowGroupName)
                }
                if(dataValuePresent === false) {
                    checkInColumnGroup(colGroupName)
                }

            });


        });
