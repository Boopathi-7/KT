
document.addEventListener("DOMContentLoaded", () => {
  const assetIdInput = document.getElementById("assetId");
  const assetCatInput = document.getElementById("assetCat");
  const assetBrandInput = document.getElementById("assetBrand");
  const assetModelInput = document.getElementById("assetModel");
  const assetBranchInput = document.getElementById("assetBranch");
  const ser_noInput = document.getElementById("assetSer_no");
  const empIdInput = document.getElementById("empId");
  const empNameInput = document.getElementById("empName");
  const empNumberInput = document.getElementById("empNumber");
  const userNameInput = document.getElementById("userName");
  const userNumberInput = document.getElementById("userNumber");

  console.log("data:", data);   

  // Populate asset fields
  ser_noInput.addEventListener("keyup", () => {
    const ser_no = ser_noInput.value.trim();
    const matchedData = data.find((d)=> d.assetSer_no.toString()  === ser_no);
    if (matchedData) {
      assetCatInput.value = matchedData.assetCat || "";
      assetBrandInput.value = matchedData.assetBrand || "";  
      assetBranchInput.value = matchedData.assetBranch || "";
      assetModelInput.value = matchedData.assetModel || "";
      assetIdInput.value = matchedData.assetId || "";
      empIdInput.value = matchedData.empId || "";
      empNameInput.value = matchedData.empName || "";
      empNumberInput.value = matchedData.empNumber || "";
      userNameInput.value = matchedData.userName || "";
      userNumberInput.value = matchedData.userNumber || "";
    } else {
      assetCatInput.value = "";
      assetBrandInput.value = "";
      assetModelInput.value = "";
      assetBranchInput.value = "";
      assetIdInput.value = "";
      empIdInput.value = "";
      empNameInput.value = "";
      empNumberInput.value = "";
      userIdInput.value = "";
      userNameInput.value = "";
      userNumberInput.value = "";
    }
  })



});