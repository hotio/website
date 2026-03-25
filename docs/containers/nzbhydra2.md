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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23351" onclick="CopyToClipboard('tag23351');return false;" class="tag-decoration">release</div><div id="tag28021" onclick="CopyToClipboard('tag28021');return false;" class="tag-decoration">release-4c1046a</div><div id="tag19356" onclick="CopyToClipboard('tag19356');return false;" class="tag-decoration">release-8.5.3</div><div id="tag31547" onclick="CopyToClipboard('tag31547');return false;" class="tag-decoration">release-v8</div><div id="tag14930" onclick="CopyToClipboard('tag14930');return false;" class="tag-decoration">release-v8.5</div><div id="tag6860" onclick="CopyToClipboard('tag6860');return false;" class="tag-decoration">release-v8.5.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4c1046ab893170ff9e210db9fbf03aa5e8e66741" target="_blank">Version update: 8.5.2 => 8.5.3</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/23554902566" target="_blank">2026-03-25 17:30:14</a></td></tr>
<tr><td><div id="tag10496" onclick="CopyToClipboard('tag10496');return false;" class="tag-decoration">testing</div><div id="tag23806" onclick="CopyToClipboard('tag23806');return false;" class="tag-decoration">testing-3b11eb5</div><div id="tag13807" onclick="CopyToClipboard('tag13807');return false;" class="tag-decoration">testing-8.5.3</div><div id="tag15101" onclick="CopyToClipboard('tag15101');return false;" class="tag-decoration">testing-v8</div><div id="tag2424" onclick="CopyToClipboard('tag2424');return false;" class="tag-decoration">testing-v8.5</div><div id="tag676" onclick="CopyToClipboard('tag676');return false;" class="tag-decoration">testing-v8.5.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/3b11eb53af223a10867d47b799709531f2b24806" target="_blank">Version update: 8.5.2 => 8.5.3</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/23554902365" target="_blank">2026-03-25 17:30:15</a></td></tr>
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
