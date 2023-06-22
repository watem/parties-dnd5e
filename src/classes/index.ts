/*import * as API from "./classes/api";
import {PartyHooks} from "./constants";
import GameSettingsRegistration from "./classes/settings/game-settings-registration";

(window as any).Parties = {
    api: API,
    Hooks: PartyHooks
};


Hooks.on('init', async () => {
    //Register Handlebar Helpers and our game settings
    HandlebarsHelpers.Register();  // ?
    GameSettingsRegistration.Register();
    //Initialize the calendar manager (loads the calendars and their settings)
    await CalManager.initialize();  // ?
    //Load the global configuration settings
    SC.load();  // ?
    //Initialize the main application (Pre-set values before render)
    MainApplication.initialize();  // ?
    Hook.emit(PartyHooks.Init);  // objects to pass?
});
Hooks.on('ready',async () => {
    MigrationApplication.initialize();
    //Check to see if we need to run a migration, if we do show the migration dialog otherwise show the main app
    if(MigrationApplication.showMigration){
        await MigrationApplication.run();
        //Initialize the note manager
        await NManager.initialize();
        //Initialize the Simple Calendar Class
        SC.initialize();
    } else {
        //Initialize the note manager
        await NManager.initialize();  // ?
        //Initialize the Simple Calendar Class
        SC.initialize();  // ?
        //If we are to open the main app on foundry load, open it
        if(SC.clientSettings.openOnLoad){  // ?
            MainApplication.render();  // ?
        }  // ?
    }
    Hook.emit(PartyHooks.Ready);  // objects to pass?
});*/