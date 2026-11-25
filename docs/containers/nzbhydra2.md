---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20578" onclick="CopyToClipboard('tag20578');return false;" class="tag-decoration">release</div><div id="tag1450" onclick="CopyToClipboard('tag1450');return false;" class="tag-decoration">release-0b2d89f</div><div id="tag18600" onclick="CopyToClipboard('tag18600');return false;" class="tag-decoration">release-9.3.4</div><div id="tag10943" onclick="CopyToClipboard('tag10943');return false;" class="tag-decoration">release-v9</div><div id="tag11801" onclick="CopyToClipboard('tag11801');return false;" class="tag-decoration">release-v9.3</div><div id="tag5012" onclick="CopyToClipboard('tag5012');return false;" class="tag-decoration">release-v9.3.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/0b2d89f101972242a2b435d4c73c069cf913cfcf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/45688219478" target="_blank">2026-11-25 19:44:46</a></td></tr>
<tr><td><div id="tag7159" onclick="CopyToClipboard('tag7159');return false;" class="tag-decoration">testing</div><div id="tag10810" onclick="CopyToClipboard('tag10810');return false;" class="tag-decoration">testing-863a58b</div><div id="tag14052" onclick="CopyToClipboard('tag14052');return false;" class="tag-decoration">testing-9.3.4</div><div id="tag12309" onclick="CopyToClipboard('tag12309');return false;" class="tag-decoration">testing-v9</div><div id="tag32732" onclick="CopyToClipboard('tag32732');return false;" class="tag-decoration">testing-v9.3</div><div id="tag30050" onclick="CopyToClipboard('tag30050');return false;" class="tag-decoration">testing-v9.3.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/863a58bb5910f1af18c66e739818d6d906b9fb2a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/45426307395" target="_blank">2026-11-24 15:30:27</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
