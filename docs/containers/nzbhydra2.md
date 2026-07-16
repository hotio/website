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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32078" onclick="CopyToClipboard('tag32078');return false;" class="tag-decoration">release</div><div id="tag25042" onclick="CopyToClipboard('tag25042');return false;" class="tag-decoration">release-61a6f2b</div><div id="tag28808" onclick="CopyToClipboard('tag28808');return false;" class="tag-decoration">release-8.9.0</div><div id="tag5219" onclick="CopyToClipboard('tag5219');return false;" class="tag-decoration">release-v8</div><div id="tag22107" onclick="CopyToClipboard('tag22107');return false;" class="tag-decoration">release-v8.9</div><div id="tag13416" onclick="CopyToClipboard('tag13416');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/61a6f2b84d601484b64e8462acc7da8ca32f7bf9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29538168347" target="_blank">2026-07-16 22:02:11</a></td></tr>
<tr><td><div id="tag2511" onclick="CopyToClipboard('tag2511');return false;" class="tag-decoration">testing</div><div id="tag17083" onclick="CopyToClipboard('tag17083');return false;" class="tag-decoration">testing-a0c3196</div><div id="tag6099" onclick="CopyToClipboard('tag6099');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag6562" onclick="CopyToClipboard('tag6562');return false;" class="tag-decoration">testing-v8</div><div id="tag20170" onclick="CopyToClipboard('tag20170');return false;" class="tag-decoration">testing-v8.9</div><div id="tag30249" onclick="CopyToClipboard('tag30249');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/a0c3196f69fd4740571660353d89dceb69f993bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29538163081" target="_blank">2026-07-16 22:02:05</a></td></tr>
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
