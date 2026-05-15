---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag18842" onclick="CopyToClipboard('tag18842');return false;" class="tag-decoration">nightly</div><div id="tag4553" onclick="CopyToClipboard('tag4553');return false;" class="tag-decoration">nightly-9a1f51c</div><div id="tag3907" onclick="CopyToClipboard('tag3907');return false;" class="tag-decoration">nightly-b6b992e521defbf4c7ed043de316c90f6fb7f36e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/9a1f51cb5b97d297eee1e23f30888105ffb62f4b" target="_blank"></a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25916129965" target="_blank">2026-05-15 10:22:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21665" onclick="CopyToClipboard('tag21665');return false;" class="tag-decoration">release</div><div id="tag23442" onclick="CopyToClipboard('tag23442');return false;" class="tag-decoration">release-be92865</div><div id="tag11170" onclick="CopyToClipboard('tag11170');return false;" class="tag-decoration">release-5.0.2</div><div id="tag1158" onclick="CopyToClipboard('tag1158');return false;" class="tag-decoration">release-v5</div><div id="tag15438" onclick="CopyToClipboard('tag15438');return false;" class="tag-decoration">release-v5.0</div><div id="tag25342" onclick="CopyToClipboard('tag25342');return false;" class="tag-decoration">release-v5.0.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/be928655a6aeed558def2984ddad6880f650e756" target="_blank"></a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25916123789" target="_blank">2026-05-14 19:44:41</a></td></tr>
<tr><td><div id="tag30541" onclick="CopyToClipboard('tag30541');return false;" class="tag-decoration">testing</div><div id="tag19924" onclick="CopyToClipboard('tag19924');return false;" class="tag-decoration">testing-9310d80</div><div id="tag3312" onclick="CopyToClipboard('tag3312');return false;" class="tag-decoration">testing-5.0.2</div><div id="tag17755" onclick="CopyToClipboard('tag17755');return false;" class="tag-decoration">testing-v5</div><div id="tag23098" onclick="CopyToClipboard('tag23098');return false;" class="tag-decoration">testing-v5.0</div><div id="tag22045" onclick="CopyToClipboard('tag22045');return false;" class="tag-decoration">testing-v5.0.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9310d801f03333b19288c81535db3c8e1cff99cc" target="_blank"></a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25916135982" target="_blank">2026-05-14 19:44:43</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
