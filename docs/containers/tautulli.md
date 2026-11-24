---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1183" onclick="CopyToClipboard('tag1183');return false;" class="tag-decoration">release</div><div id="tag15109" onclick="CopyToClipboard('tag15109');return false;" class="tag-decoration">release-43cd9a9</div><div id="tag9829" onclick="CopyToClipboard('tag9829');return false;" class="tag-decoration">release-2.19.1</div><div id="tag5981" onclick="CopyToClipboard('tag5981');return false;" class="tag-decoration">release-v2</div><div id="tag24949" onclick="CopyToClipboard('tag24949');return false;" class="tag-decoration">release-v2.19</div><div id="tag3436" onclick="CopyToClipboard('tag3436');return false;" class="tag-decoration">release-v2.19.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/43cd9a96a643becf49fb005107001951289cd03b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/45313816876" target="_blank">2026-11-24 02:37:57</a></td></tr>
<tr><td><div id="tag14675" onclick="CopyToClipboard('tag14675');return false;" class="tag-decoration">testing</div><div id="tag14936" onclick="CopyToClipboard('tag14936');return false;" class="tag-decoration">testing-907ea15</div><div id="tag16890" onclick="CopyToClipboard('tag16890');return false;" class="tag-decoration">testing-2.19.1</div><div id="tag20391" onclick="CopyToClipboard('tag20391');return false;" class="tag-decoration">testing-v2</div><div id="tag32603" onclick="CopyToClipboard('tag32603');return false;" class="tag-decoration">testing-v2.19</div><div id="tag20884" onclick="CopyToClipboard('tag20884');return false;" class="tag-decoration">testing-v2.19.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/907ea159e490f26a4dd3af507e54b5865746ea0e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/45313817577" target="_blank">2026-11-24 02:37:57</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
