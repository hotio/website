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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20911" onclick="CopyToClipboard('tag20911');return false;" class="tag-decoration">release</div><div id="tag27555" onclick="CopyToClipboard('tag27555');return false;" class="tag-decoration">release-927008a</div><div id="tag19350" onclick="CopyToClipboard('tag19350');return false;" class="tag-decoration">release-9.1.1</div><div id="tag19989" onclick="CopyToClipboard('tag19989');return false;" class="tag-decoration">release-v9</div><div id="tag22207" onclick="CopyToClipboard('tag22207');return false;" class="tag-decoration">release-v9.1</div><div id="tag19685" onclick="CopyToClipboard('tag19685');return false;" class="tag-decoration">release-v9.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/927008a8546e0ab40111c8f0a5124ba0d023ac21" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/38632149307" target="_blank">2026-10-14 20:26:54</a></td></tr>
<tr><td><div id="tag32004" onclick="CopyToClipboard('tag32004');return false;" class="tag-decoration">testing</div><div id="tag20529" onclick="CopyToClipboard('tag20529');return false;" class="tag-decoration">testing-8778182</div><div id="tag30479" onclick="CopyToClipboard('tag30479');return false;" class="tag-decoration">testing-9.1.1</div><div id="tag2818" onclick="CopyToClipboard('tag2818');return false;" class="tag-decoration">testing-v9</div><div id="tag4544" onclick="CopyToClipboard('tag4544');return false;" class="tag-decoration">testing-v9.1</div><div id="tag25019" onclick="CopyToClipboard('tag25019');return false;" class="tag-decoration">testing-v9.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8778182f109bba27602192dbbe0644e11dda6a9a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/38632138395" target="_blank">2026-10-14 20:26:49</a></td></tr>
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
