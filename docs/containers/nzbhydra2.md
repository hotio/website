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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag279" onclick="CopyToClipboard('tag279');return false;" class="tag-decoration">release</div><div id="tag808" onclick="CopyToClipboard('tag808');return false;" class="tag-decoration">release-7048ba2</div><div id="tag21400" onclick="CopyToClipboard('tag21400');return false;" class="tag-decoration">release-8.9.0</div><div id="tag11200" onclick="CopyToClipboard('tag11200');return false;" class="tag-decoration">release-v8</div><div id="tag12083" onclick="CopyToClipboard('tag12083');return false;" class="tag-decoration">release-v8.9</div><div id="tag30887" onclick="CopyToClipboard('tag30887');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/7048ba2631942b049333e12f00c7e33c3891cc6b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/34400876646" target="_blank">2026-09-09 20:24:45</a></td></tr>
<tr><td><div id="tag4639" onclick="CopyToClipboard('tag4639');return false;" class="tag-decoration">testing</div><div id="tag10856" onclick="CopyToClipboard('tag10856');return false;" class="tag-decoration">testing-3c99af8</div><div id="tag15315" onclick="CopyToClipboard('tag15315');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag12255" onclick="CopyToClipboard('tag12255');return false;" class="tag-decoration">testing-v8</div><div id="tag3969" onclick="CopyToClipboard('tag3969');return false;" class="tag-decoration">testing-v8.9</div><div id="tag18575" onclick="CopyToClipboard('tag18575');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/3c99af8f225b6ad664b0979fb23512893b04348f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/34400893715" target="_blank">2026-09-09 20:24:55</a></td></tr>
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
