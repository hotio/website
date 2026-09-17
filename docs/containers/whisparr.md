---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24348" onclick="CopyToClipboard('tag24348');return false;" class="tag-decoration">v2</div><div id="tag10350" onclick="CopyToClipboard('tag10350');return false;" class="tag-decoration">v2-9cb62a4</div><div id="tag10544" onclick="CopyToClipboard('tag10544');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag15851" onclick="CopyToClipboard('tag15851');return false;" class="tag-decoration">v2-v2</div><div id="tag21263" onclick="CopyToClipboard('tag21263');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8692" onclick="CopyToClipboard('tag8692');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9cb62a4e3b9840457fdd860e004a7509da38de68" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35272250651" target="_blank">2026-09-17 20:40:40</a></td></tr>
<tr><td><div id="tag17799" onclick="CopyToClipboard('tag17799');return false;" class="tag-decoration">v2-develop</div><div id="tag17840" onclick="CopyToClipboard('tag17840');return false;" class="tag-decoration">v2-develop-ad6d4d2</div><div id="tag4573" onclick="CopyToClipboard('tag4573');return false;" class="tag-decoration">v2-develop-2.2.0-develop.353</div><div id="tag20652" onclick="CopyToClipboard('tag20652');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag22421" onclick="CopyToClipboard('tag22421');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16773" onclick="CopyToClipboard('tag16773');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ad6d4d20b850aaaf3fdb4ce51b47c0b4e1af82bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35272261703" target="_blank">2026-09-17 20:40:47</a></td></tr>
<tr><td><div id="tag21618" onclick="CopyToClipboard('tag21618');return false;" class="tag-decoration">v3</div><div id="tag12381" onclick="CopyToClipboard('tag12381');return false;" class="tag-decoration">v3-5b9ca39</div><div id="tag29391" onclick="CopyToClipboard('tag29391');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag27639" onclick="CopyToClipboard('tag27639');return false;" class="tag-decoration">v3-v3</div><div id="tag14008" onclick="CopyToClipboard('tag14008');return false;" class="tag-decoration">v3-v3.5</div><div id="tag11141" onclick="CopyToClipboard('tag11141');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5b9ca3933c673714a52679faa682a9f901008a6b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35254985969" target="_blank">2026-09-17 17:48:36</a></td></tr>
<tr><td><div id="tag16747" onclick="CopyToClipboard('tag16747');return false;" class="tag-decoration">v3-develop</div><div id="tag3253" onclick="CopyToClipboard('tag3253');return false;" class="tag-decoration">v3-develop-fefe407</div><div id="tag17193" onclick="CopyToClipboard('tag17193');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1639</div><div id="tag23273" onclick="CopyToClipboard('tag23273');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28018" onclick="CopyToClipboard('tag28018');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag12775" onclick="CopyToClipboard('tag12775');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/fefe40709c3e644b87bb3f89147e88987141fc08" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35254982583" target="_blank">2026-09-17 17:48:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
