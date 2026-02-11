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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6772" onclick="CopyToClipboard('tag6772');return false;" class="tag-decoration">release</div><div id="tag2214" onclick="CopyToClipboard('tag2214');return false;" class="tag-decoration">release-fe669d8</div><div id="tag24414" onclick="CopyToClipboard('tag24414');return false;" class="tag-decoration">release-0.24.1089</div><div id="tag15027" onclick="CopyToClipboard('tag15027');return false;" class="tag-decoration">release-v0</div><div id="tag4753" onclick="CopyToClipboard('tag4753');return false;" class="tag-decoration">release-v0.24</div><div id="tag6094" onclick="CopyToClipboard('tag6094');return false;" class="tag-decoration">release-v0.24.1089</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fe669d85091f403d230b3bbd09bf8ae0b52c37f7" target="_blank">Version update: 0.24.1074 => 0.24.1089</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21854054820" target="_blank">2026-02-10 06:18:53</a></td></tr>
<tr><td><div id="tag31443" onclick="CopyToClipboard('tag31443');return false;" class="tag-decoration">testing</div><div id="tag19835" onclick="CopyToClipboard('tag19835');return false;" class="tag-decoration">testing-cf0f4fc</div><div id="tag27158" onclick="CopyToClipboard('tag27158');return false;" class="tag-decoration">testing-0.24.1094</div><div id="tag20359" onclick="CopyToClipboard('tag20359');return false;" class="tag-decoration">testing-v0</div><div id="tag12785" onclick="CopyToClipboard('tag12785');return false;" class="tag-decoration">testing-v0.24</div><div id="tag17664" onclick="CopyToClipboard('tag17664');return false;" class="tag-decoration">testing-v0.24.1094</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/cf0f4fc04f45e059d84ea42e5822090c296a65da" target="_blank">Version update: 0.24.1089 => 0.24.1094</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21894817113" target="_blank">2026-02-11 06:16:46</a></td></tr>
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
