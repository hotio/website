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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1084" onclick="CopyToClipboard('tag1084');return false;" class="tag-decoration">release</div><div id="tag20251" onclick="CopyToClipboard('tag20251');return false;" class="tag-decoration">release-f297d49</div><div id="tag13641" onclick="CopyToClipboard('tag13641');return false;" class="tag-decoration">release-0.24.1368</div><div id="tag31067" onclick="CopyToClipboard('tag31067');return false;" class="tag-decoration">release-v0</div><div id="tag8727" onclick="CopyToClipboard('tag8727');return false;" class="tag-decoration">release-v0.24</div><div id="tag1301" onclick="CopyToClipboard('tag1301');return false;" class="tag-decoration">release-v0.24.1368</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f297d49abf5b8739d6deb9a4b277b431fde22203" target="_blank">Version update: 0.24.1367 => 0.24.1368</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23090388336" target="_blank">2026-03-14 15:01:39</a></td></tr>
<tr><td><div id="tag29014" onclick="CopyToClipboard('tag29014');return false;" class="tag-decoration">testing</div><div id="tag17615" onclick="CopyToClipboard('tag17615');return false;" class="tag-decoration">testing-a2e34ef</div><div id="tag16853" onclick="CopyToClipboard('tag16853');return false;" class="tag-decoration">testing-0.24.1368</div><div id="tag1791" onclick="CopyToClipboard('tag1791');return false;" class="tag-decoration">testing-v0</div><div id="tag1619" onclick="CopyToClipboard('tag1619');return false;" class="tag-decoration">testing-v0.24</div><div id="tag1377" onclick="CopyToClipboard('tag1377');return false;" class="tag-decoration">testing-v0.24.1368</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a2e34ef849ff9e89479a7f261720c1359cf686d5" target="_blank">Version update: 0.24.1367 => 0.24.1368</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23090388613" target="_blank">2026-03-14 15:01:41</a></td></tr>
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
