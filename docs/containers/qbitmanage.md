---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag26915" onclick="CopyToClipboard('tag26915');return false;" class="tag-decoration">nightly</div><div id="tag604" onclick="CopyToClipboard('tag604');return false;" class="tag-decoration">nightly-6aafba4bec8663d73ee63e2431df71256db1aaba</div><div id="tag236" onclick="CopyToClipboard('tag236');return false;" class="tag-decoration">nightly-da1241d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/da1241d6091565eee82d124325088f78a956e116" target="_blank">Version update: 73fb96bfbad112e6b4a07c434abf7dfb09c65ba0 => 6aafba4bec8663d73ee63e2431df71256db1aaba</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20764275936" target="_blank">2026-01-06 22:36:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7374" onclick="CopyToClipboard('tag7374');return false;" class="tag-decoration">release</div><div id="tag22073" onclick="CopyToClipboard('tag22073');return false;" class="tag-decoration">release-4.6.5</div><div id="tag18200" onclick="CopyToClipboard('tag18200');return false;" class="tag-decoration">release-10107ad</div><div id="tag20003" onclick="CopyToClipboard('tag20003');return false;" class="tag-decoration">release-v4</div><div id="tag15272" onclick="CopyToClipboard('tag15272');return false;" class="tag-decoration">release-v4.6</div><div id="tag27562" onclick="CopyToClipboard('tag27562');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td>Upstream image update</td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20690832479" target="_blank">2026-01-04 09:26:26</a></td></tr>
</tbody>
  </table>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="/javascripts/loadJSON-12.js"></script>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name qbitmanage \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
