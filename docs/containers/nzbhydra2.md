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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23618" onclick="CopyToClipboard('tag23618');return false;" class="tag-decoration">release</div><div id="tag22687" onclick="CopyToClipboard('tag22687');return false;" class="tag-decoration">release-6298784</div><div id="tag32547" onclick="CopyToClipboard('tag32547');return false;" class="tag-decoration">release-8.8.1</div><div id="tag25491" onclick="CopyToClipboard('tag25491');return false;" class="tag-decoration">release-v8</div><div id="tag23547" onclick="CopyToClipboard('tag23547');return false;" class="tag-decoration">release-v8.8</div><div id="tag29251" onclick="CopyToClipboard('tag29251');return false;" class="tag-decoration">release-v8.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/629878414d4ed9e3505d44b6b32398e6b640679b" target="_blank">Upstream update: noblevpn-72951af => noblevpn-3725bcf</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/25664474042" target="_blank">2026-05-11 10:23:50</a></td></tr>
<tr><td><div id="tag13161" onclick="CopyToClipboard('tag13161');return false;" class="tag-decoration">testing</div><div id="tag10978" onclick="CopyToClipboard('tag10978');return false;" class="tag-decoration">testing-91bf519</div><div id="tag29196" onclick="CopyToClipboard('tag29196');return false;" class="tag-decoration">testing-8.8.1</div><div id="tag12146" onclick="CopyToClipboard('tag12146');return false;" class="tag-decoration">testing-v8</div><div id="tag19031" onclick="CopyToClipboard('tag19031');return false;" class="tag-decoration">testing-v8.8</div><div id="tag6958" onclick="CopyToClipboard('tag6958');return false;" class="tag-decoration">testing-v8.8.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/91bf5195606a2568b230eb7f3120a02990e55a97" target="_blank">Upstream update: noblevpn-441eaee => noblevpn-72951af</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/25605051673" target="_blank">2026-05-09 15:43:37</a></td></tr>
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
