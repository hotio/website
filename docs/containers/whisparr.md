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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4031" onclick="CopyToClipboard('tag4031');return false;" class="tag-decoration">v2</div><div id="tag11294" onclick="CopyToClipboard('tag11294');return false;" class="tag-decoration">v2-f6455c2</div><div id="tag19244" onclick="CopyToClipboard('tag19244');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag9753" onclick="CopyToClipboard('tag9753');return false;" class="tag-decoration">v2-v2</div><div id="tag23462" onclick="CopyToClipboard('tag23462');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8241" onclick="CopyToClipboard('tag8241');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f6455c21a9ae6297dea407cae07a992be88f2984" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35254995337" target="_blank">2026-09-17 17:48:42</a></td></tr>
<tr><td><div id="tag32514" onclick="CopyToClipboard('tag32514');return false;" class="tag-decoration">v2-develop</div><div id="tag9902" onclick="CopyToClipboard('tag9902');return false;" class="tag-decoration">v2-develop-d70569e</div><div id="tag4688" onclick="CopyToClipboard('tag4688');return false;" class="tag-decoration">v2-develop-2.2.0-develop.339</div><div id="tag32534" onclick="CopyToClipboard('tag32534');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5342" onclick="CopyToClipboard('tag5342');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag4962" onclick="CopyToClipboard('tag4962');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d70569e1c50e5410ce844de3dc80773fa047d123" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35130458272" target="_blank">2026-09-16 17:48:24</a></td></tr>
<tr><td><div id="tag19693" onclick="CopyToClipboard('tag19693');return false;" class="tag-decoration">v3</div><div id="tag21784" onclick="CopyToClipboard('tag21784');return false;" class="tag-decoration">v3-5b9ca39</div><div id="tag20556" onclick="CopyToClipboard('tag20556');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag7099" onclick="CopyToClipboard('tag7099');return false;" class="tag-decoration">v3-v3</div><div id="tag11432" onclick="CopyToClipboard('tag11432');return false;" class="tag-decoration">v3-v3.5</div><div id="tag32252" onclick="CopyToClipboard('tag32252');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5b9ca3933c673714a52679faa682a9f901008a6b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35254985969" target="_blank">2026-09-17 17:48:36</a></td></tr>
<tr><td><div id="tag20445" onclick="CopyToClipboard('tag20445');return false;" class="tag-decoration">v3-develop</div><div id="tag190" onclick="CopyToClipboard('tag190');return false;" class="tag-decoration">v3-develop-fefe407</div><div id="tag9893" onclick="CopyToClipboard('tag9893');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1639</div><div id="tag14857" onclick="CopyToClipboard('tag14857');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag32385" onclick="CopyToClipboard('tag32385');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag9710" onclick="CopyToClipboard('tag9710');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/fefe40709c3e644b87bb3f89147e88987141fc08" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35254982583" target="_blank">2026-09-17 17:48:33</a></td></tr>
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
