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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28756" onclick="CopyToClipboard('tag28756');return false;" class="tag-decoration">release</div><div id="tag11414" onclick="CopyToClipboard('tag11414');return false;" class="tag-decoration">release-cbd3cb4</div><div id="tag29145" onclick="CopyToClipboard('tag29145');return false;" class="tag-decoration">release-8.3.0</div><div id="tag30207" onclick="CopyToClipboard('tag30207');return false;" class="tag-decoration">release-v8</div><div id="tag20250" onclick="CopyToClipboard('tag20250');return false;" class="tag-decoration">release-v8.3</div><div id="tag2265" onclick="CopyToClipboard('tag2265');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/cbd3cb4aacc1ba9892a6e1eb58a994bd1a1de225" target="_blank">Version update: 8.2.3 => 8.3.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21073768729" target="_blank">2026-01-16 16:40:31</a></td></tr>
<tr><td><div id="tag32110" onclick="CopyToClipboard('tag32110');return false;" class="tag-decoration">testing</div><div id="tag30448" onclick="CopyToClipboard('tag30448');return false;" class="tag-decoration">testing-7191daa</div><div id="tag11516" onclick="CopyToClipboard('tag11516');return false;" class="tag-decoration">testing-8.2.3</div><div id="tag20400" onclick="CopyToClipboard('tag20400');return false;" class="tag-decoration">testing-v8</div><div id="tag8376" onclick="CopyToClipboard('tag8376');return false;" class="tag-decoration">testing-v8.2</div><div id="tag16511" onclick="CopyToClipboard('tag16511');return false;" class="tag-decoration">testing-v8.2.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/7191daa3611b7aeeb0aa6ad3df66c833c20a56ee" target="_blank">Upstream update: noblevpn-b3fe625 => noblevpn-7d9e72c</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21065732025" target="_blank">2026-01-16 11:52:32</a></td></tr>
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
