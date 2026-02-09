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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4716" onclick="CopyToClipboard('tag4716');return false;" class="tag-decoration">release</div><div id="tag24470" onclick="CopyToClipboard('tag24470');return false;" class="tag-decoration">release-dbc0afc</div><div id="tag19503" onclick="CopyToClipboard('tag19503');return false;" class="tag-decoration">release-0.24.1074</div><div id="tag23547" onclick="CopyToClipboard('tag23547');return false;" class="tag-decoration">release-v0</div><div id="tag3849" onclick="CopyToClipboard('tag3849');return false;" class="tag-decoration">release-v0.24</div><div id="tag6513" onclick="CopyToClipboard('tag6513');return false;" class="tag-decoration">release-v0.24.1074</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/dbc0afc4e85576a170b28aed9c30c553aa093da7" target="_blank">Version update: 0.24.1066 => 0.24.1074</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21815077737" target="_blank">2026-02-09 06:42:34</a></td></tr>
<tr><td><div id="tag28906" onclick="CopyToClipboard('tag28906');return false;" class="tag-decoration">testing</div><div id="tag2593" onclick="CopyToClipboard('tag2593');return false;" class="tag-decoration">testing-b69129c</div><div id="tag16345" onclick="CopyToClipboard('tag16345');return false;" class="tag-decoration">testing-0.24.1074</div><div id="tag5929" onclick="CopyToClipboard('tag5929');return false;" class="tag-decoration">testing-v0</div><div id="tag17354" onclick="CopyToClipboard('tag17354');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13773" onclick="CopyToClipboard('tag13773');return false;" class="tag-decoration">testing-v0.24.1074</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b69129caf1f4563feb406d1086340e87598393b9" target="_blank">Version update: 0.24.1066 => 0.24.1074</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21815078318" target="_blank">2026-02-09 06:42:36</a></td></tr>
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
