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
  const userIdInput = document.getElementById("userId");
  const userNameInput = document.getElementById("userName");
  const userNumberInput = document.getElementById("userNumber");

 
  console.log("Employee Data:", emp);
  console.log("Asset Data:", asset);


  // Populate asset fields
  ser_noInput.addEventListener("keyup", () => {
    const ser_no = ser_noInput.value.trim();
    const matchesAsset = asset.find((a) => a.ser_no.toString() === ser_no);
    if (matchesAsset) {
      assetCatInput.value = matchesAsset.cat || "";
      assetBrandInput.value = matchesAsset.brand || "";
      assetBranchInput.value = matchesAsset.branch || "";
      assetModelInput.value = matchesAsset.model || "";
      assetIdInput.value = matchesAsset.id || "";
    } else {
      assetCatInput.value = "";
      assetBrandInput.value = "";
      assetModelInput.value = "";
      assetBranchInput.value = "";
      assetIdInput.value = "";
    }
  });

  // Populate employee fields
  empIdInput.addEventListener("keyup", () => {
    const empId = empIdInput.value.trim();
    const matchedEmp = emp.find((e) => e.id.toString() === empId);
    if (matchedEmp) {
      empNameInput.value = matchedEmp.name || "";
      empNumberInput.value = matchedEmp.number || "";
    } else {
      empNameInput.value = "";
      empNumberInput.value = "";
    }
  });

});
