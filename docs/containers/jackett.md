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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21192" onclick="CopyToClipboard('tag21192');return false;" class="tag-decoration">release</div><div id="tag26973" onclick="CopyToClipboard('tag26973');return false;" class="tag-decoration">release-f190996</div><div id="tag14156" onclick="CopyToClipboard('tag14156');return false;" class="tag-decoration">release-0.25.28</div><div id="tag8671" onclick="CopyToClipboard('tag8671');return false;" class="tag-decoration">release-v0</div><div id="tag22808" onclick="CopyToClipboard('tag22808');return false;" class="tag-decoration">release-v0.25</div><div id="tag19100" onclick="CopyToClipboard('tag19100');return false;" class="tag-decoration">release-v0.25.28</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f1909967f95379fb4b1dc7a958c8829027d1c8a1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45152291771" target="_blank">2026-11-23 10:01:29</a></td></tr>
<tr><td><div id="tag7707" onclick="CopyToClipboard('tag7707');return false;" class="tag-decoration">testing</div><div id="tag24838" onclick="CopyToClipboard('tag24838');return false;" class="tag-decoration">testing-d874953</div><div id="tag23019" onclick="CopyToClipboard('tag23019');return false;" class="tag-decoration">testing-0.25.28</div><div id="tag13953" onclick="CopyToClipboard('tag13953');return false;" class="tag-decoration">testing-v0</div><div id="tag29215" onclick="CopyToClipboard('tag29215');return false;" class="tag-decoration">testing-v0.25</div><div id="tag10007" onclick="CopyToClipboard('tag10007');return false;" class="tag-decoration">testing-v0.25.28</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d874953d657139c35a87fef5af4319d1e373428d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/45278594805" target="_blank">2026-11-23 22:19:36</a></td></tr>
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
