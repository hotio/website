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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12616" onclick="CopyToClipboard('tag12616');return false;" class="tag-decoration">release</div><div id="tag17891" onclick="CopyToClipboard('tag17891');return false;" class="tag-decoration">release-3f35370</div><div id="tag5198" onclick="CopyToClipboard('tag5198');return false;" class="tag-decoration">release-8.9.0</div><div id="tag19334" onclick="CopyToClipboard('tag19334');return false;" class="tag-decoration">release-v8</div><div id="tag7268" onclick="CopyToClipboard('tag7268');return false;" class="tag-decoration">release-v8.9</div><div id="tag19051" onclick="CopyToClipboard('tag19051');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/3f35370515e54cd8d84e1c3afdb5c982c2bd756b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29773790019" target="_blank">2026-07-20 19:52:52</a></td></tr>
<tr><td><div id="tag12560" onclick="CopyToClipboard('tag12560');return false;" class="tag-decoration">testing</div><div id="tag26124" onclick="CopyToClipboard('tag26124');return false;" class="tag-decoration">testing-05c24a5</div><div id="tag3037" onclick="CopyToClipboard('tag3037');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag20601" onclick="CopyToClipboard('tag20601');return false;" class="tag-decoration">testing-v8</div><div id="tag13982" onclick="CopyToClipboard('tag13982');return false;" class="tag-decoration">testing-v8.9</div><div id="tag25863" onclick="CopyToClipboard('tag25863');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/05c24a508ef9aded7de3b0b382636e0ef3a1ed6b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29779120441" target="_blank">2026-07-20 21:10:12</a></td></tr>
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
