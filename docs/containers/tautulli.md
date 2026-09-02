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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22568" onclick="CopyToClipboard('tag22568');return false;" class="tag-decoration">release</div><div id="tag22272" onclick="CopyToClipboard('tag22272');return false;" class="tag-decoration">release-19cbf59</div><div id="tag14593" onclick="CopyToClipboard('tag14593');return false;" class="tag-decoration">release-2.18.1</div><div id="tag14116" onclick="CopyToClipboard('tag14116');return false;" class="tag-decoration">release-v2</div><div id="tag11869" onclick="CopyToClipboard('tag11869');return false;" class="tag-decoration">release-v2.18</div><div id="tag16330" onclick="CopyToClipboard('tag16330');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/19cbf5934b4b8e396bd54c59e4de108f2732a1b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33599088421" target="_blank">2026-09-02 06:29:44</a></td></tr>
<tr><td><div id="tag15985" onclick="CopyToClipboard('tag15985');return false;" class="tag-decoration">testing</div><div id="tag20460" onclick="CopyToClipboard('tag20460');return false;" class="tag-decoration">testing-1ce614a</div><div id="tag22925" onclick="CopyToClipboard('tag22925');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag6166" onclick="CopyToClipboard('tag6166');return false;" class="tag-decoration">testing-v2</div><div id="tag6572" onclick="CopyToClipboard('tag6572');return false;" class="tag-decoration">testing-v2.18</div><div id="tag7956" onclick="CopyToClipboard('tag7956');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/1ce614aa903a38832c0fbb94cb1529a9474cd95b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33579914541" target="_blank">2026-09-02 01:34:03</a></td></tr>
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
