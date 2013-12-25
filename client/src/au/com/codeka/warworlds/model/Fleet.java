package au.com.codeka.warworlds.model;

import au.com.codeka.common.model.BaseDesignManager;
import au.com.codeka.common.model.BaseFleet;
import au.com.codeka.common.model.BaseFleetUpgrade;
import au.com.codeka.common.model.DesignKind;
import au.com.codeka.common.model.ShipDesign;
import au.com.codeka.common.protobuf.Messages;

public class Fleet extends BaseFleet {
    public ShipDesign getDesign() {
        return (ShipDesign) BaseDesignManager.i.getDesign(DesignKind.SHIP, mDesignID);
    }

    @Override
    protected BaseFleetUpgrade createUpgrade(Messages.FleetUpgrade pb) {
        FleetUpgrade fleetUpgrade = new FleetUpgrade();
        if (pb != null) {
            fleetUpgrade.fromProtocolBuffer(this, pb);
        }
        return fleetUpgrade;
    }

    public void setNotes(String notes) {
        mNotes = notes;
    }

    public boolean hasUpgrade(String upgradeID) {
        if (mUpgrades == null) {
            return false;
        }

        for (BaseFleetUpgrade baseUpgrade : mUpgrades) {
            FleetUpgrade upgrade = (FleetUpgrade) baseUpgrade;
            if (upgrade.getUpgradeID().equals(upgradeID)) {
                return true;
            }
        }

        return false;
    }
}
