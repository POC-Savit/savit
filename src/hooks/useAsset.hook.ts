import { Schema } from "amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";


const client = generateClient<Schema>();

export const useAsset = () => {
    const [asset, setAsset] = useState<Schema["Asset"]["type"]>()

    useEffect(() => {
        client.models.Asset.list({ authMode: 'userPool' })
            .then(resp => resp.data[0])
            .then(setAsset)
        
        // const sub = client.models.Asset.observeQuery({ 
        //     authMode: 'userPool',
        // })
        // .subscribe({
        //   next: ({ items, isSynced }) => {
        //     setAsset(items[0]);
        //   },
        // });
        // return () => sub.unsubscribe();
      }, []);

      return asset
}