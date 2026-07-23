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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6223" onclick="CopyToClipboard('tag6223');return false;" class="tag-decoration">release</div><div id="tag11399" onclick="CopyToClipboard('tag11399');return false;" class="tag-decoration">release-d050adf</div><div id="tag2875" onclick="CopyToClipboard('tag2875');return false;" class="tag-decoration">release-8.9.0</div><div id="tag11097" onclick="CopyToClipboard('tag11097');return false;" class="tag-decoration">release-v8</div><div id="tag14146" onclick="CopyToClipboard('tag14146');return false;" class="tag-decoration">release-v8.9</div><div id="tag23976" onclick="CopyToClipboard('tag23976');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/d050adf2c0cca946c03c677e117d5ec083a41ca8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/30028976439" target="_blank">2026-07-23 17:20:14</a></td></tr>
<tr><td><div id="tag26361" onclick="CopyToClipboard('tag26361');return false;" class="tag-decoration">testing</div><div id="tag1056" onclick="CopyToClipboard('tag1056');return false;" class="tag-decoration">testing-002835f</div><div id="tag9772" onclick="CopyToClipboard('tag9772');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag18990" onclick="CopyToClipboard('tag18990');return false;" class="tag-decoration">testing-v8</div><div id="tag266" onclick="CopyToClipboard('tag266');return false;" class="tag-decoration">testing-v8.9</div><div id="tag19619" onclick="CopyToClipboard('tag19619');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/002835f30c14f3efed8c6c1fd6afc693a9bbaee9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29957825967" target="_blank">2026-07-22 21:05:23</a></td></tr>
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
