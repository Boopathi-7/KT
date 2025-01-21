
document.addEventListener("DOMContentLoaded", () => {
  const assetIdInput = document.getElementById("assetId");
  const assetCatInput = document.getElementById("assetCat");
  const assetBrandInput = document.getElementById("assetBrand");
  const assetModelInput = document.getElementById("assetModel");
  const assetBranchInput = document.getElementById("assetBranch");
  const ser_noInput = document.getElementById("assetSer_no");  

  console.log("data:",data);
  

  // Populate asset fields
  ser_noInput.addEventListener("keyup", () => {
    const ser_no = ser_noInput.value.trim();
    const matchedAsset = data.find((d)=> ser_no === d.assetSer_no.toString() );
    if (matchedAsset) {
      assetCatInput.value = matchedAsset.assetCat || "";
      assetBrandInput.value = matchedAsset.assetBrand || "";
      assetModelInput.value = matchedAsset.assetModel || "";
      assetBranchInput.value = matchedAsset.assetBranch || "";
      assetIdInput.value = matchedAsset.assetId || "";
    } else {
      assetCatInput.value = "";
      assetBrandInput.value = "";      
      assetModelInput.value = "";
      assetBranchInput.value = "";
      assetIdInput.value = "";
    }
  })

})