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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8794" onclick="CopyToClipboard('tag8794');return false;" class="tag-decoration">release</div><div id="tag30130" onclick="CopyToClipboard('tag30130');return false;" class="tag-decoration">release-0.24.807</div><div id="tag26645" onclick="CopyToClipboard('tag26645');return false;" class="tag-decoration">release-6e4f241</div><div id="tag22779" onclick="CopyToClipboard('tag22779');return false;" class="tag-decoration">release-v0</div><div id="tag30215" onclick="CopyToClipboard('tag30215');return false;" class="tag-decoration">release-v0.24</div><div id="tag6674" onclick="CopyToClipboard('tag6674');return false;" class="tag-decoration">release-v0.24.807</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6e4f241d0051c8d46f5c911fc977569fd6dc4daf" target="_blank">Version update: 0.24.790 => 0.24.807</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20874339789" target="_blank">2026-01-10 06:37:01</a></td></tr>
<tr><td><div id="tag6818" onclick="CopyToClipboard('tag6818');return false;" class="tag-decoration">testing</div><div id="tag2730" onclick="CopyToClipboard('tag2730');return false;" class="tag-decoration">testing-0.24.821</div><div id="tag8751" onclick="CopyToClipboard('tag8751');return false;" class="tag-decoration">testing-a03af37</div><div id="tag22771" onclick="CopyToClipboard('tag22771');return false;" class="tag-decoration">testing-v0</div><div id="tag712" onclick="CopyToClipboard('tag712');return false;" class="tag-decoration">testing-v0.24</div><div id="tag17998" onclick="CopyToClipboard('tag17998');return false;" class="tag-decoration">testing-v0.24.821</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a03af377f5bae6206eab177f42fe816d90886ce1" target="_blank">Version update: 0.24.807 => 0.24.821</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20890956057" target="_blank">2026-01-11 06:41:31</a></td></tr>
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
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

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
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
