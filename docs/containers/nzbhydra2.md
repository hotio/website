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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23100" onclick="CopyToClipboard('tag23100');return false;" class="tag-decoration">release</div><div id="tag11789" onclick="CopyToClipboard('tag11789');return false;" class="tag-decoration">release-4a9f697</div><div id="tag12869" onclick="CopyToClipboard('tag12869');return false;" class="tag-decoration">release-8.8.1</div><div id="tag23356" onclick="CopyToClipboard('tag23356');return false;" class="tag-decoration">release-v8</div><div id="tag17105" onclick="CopyToClipboard('tag17105');return false;" class="tag-decoration">release-v8.8</div><div id="tag13918" onclick="CopyToClipboard('tag13918');return false;" class="tag-decoration">release-v8.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4a9f697fb726f09678289ba7c3415f525e6fc0d6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/26524786554" target="_blank">2026-05-27 16:36:31</a></td></tr>
<tr><td><div id="tag9001" onclick="CopyToClipboard('tag9001');return false;" class="tag-decoration">testing</div><div id="tag12069" onclick="CopyToClipboard('tag12069');return false;" class="tag-decoration">testing-f93ba3c</div><div id="tag11823" onclick="CopyToClipboard('tag11823');return false;" class="tag-decoration">testing-8.8.1</div><div id="tag9940" onclick="CopyToClipboard('tag9940');return false;" class="tag-decoration">testing-v8</div><div id="tag7012" onclick="CopyToClipboard('tag7012');return false;" class="tag-decoration">testing-v8.8</div><div id="tag612" onclick="CopyToClipboard('tag612');return false;" class="tag-decoration">testing-v8.8.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/f93ba3cb5e4fad47b6b09372f58d707c60599fb6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/26184809531" target="_blank">2026-05-20 19:23:57</a></td></tr>
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
