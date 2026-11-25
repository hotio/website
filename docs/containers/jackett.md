---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28353" onclick="CopyToClipboard('tag28353');return false;" class="tag-decoration">release</div><div id="tag10003" onclick="CopyToClipboard('tag10003');return false;" class="tag-decoration">release-a6d86cb</div><div id="tag5744" onclick="CopyToClipboard('tag5744');return false;" class="tag-decoration">release-0.25.34</div><div id="tag22652" onclick="CopyToClipboard('tag22652');return false;" class="tag-decoration">release-v0</div><div id="tag20309" onclick="CopyToClipboard('tag20309');return false;" class="tag-decoration">release-v0.25</div><div id="tag6554" onclick="CopyToClipboard('tag6554');return false;" class="tag-decoration">release-v0.25.34</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a6d86cbc302aeb4a572c4522018f6bbadebd808f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45535952111" target="_blank">2026-11-25 02:51:50</a></td></tr>
<tr><td><div id="tag32525" onclick="CopyToClipboard('tag32525');return false;" class="tag-decoration">testing</div><div id="tag23446" onclick="CopyToClipboard('tag23446');return false;" class="tag-decoration">testing-751f5d9</div><div id="tag19151" onclick="CopyToClipboard('tag19151');return false;" class="tag-decoration">testing-0.25.34</div><div id="tag19785" onclick="CopyToClipboard('tag19785');return false;" class="tag-decoration">testing-v0</div><div id="tag17893" onclick="CopyToClipboard('tag17893');return false;" class="tag-decoration">testing-v0.25</div><div id="tag26149" onclick="CopyToClipboard('tag26149');return false;" class="tag-decoration">testing-v0.25.34</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/751f5d9e754de26c42fa7a039215ab54e7b52217" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45535951521" target="_blank">2026-11-25 02:51:50</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
